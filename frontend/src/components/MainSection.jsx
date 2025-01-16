import { useState } from "react";
import { userFormInput } from "../hooks/userFormInput";
import { userUrlShortner } from "../hooks/userUrlShortner";
import { Header } from "./Header";
import { UrlInput } from "./UrlInputField";
import { ShortenButton } from "./ShortenButton";
import { ResultSection } from "./ResultSection";

export function MainSection() {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { inputs, changeHandler } = userFormInput({ originalurl: "" });
  const { shortening } = userUrlShortner();
  const [isshort, setShort] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [error, setError] = useState("");

  const shorteningHandler = async () => {
    try {
      const response = await shortening(inputs.originalurl);
      if (response.shortUrl && response.qrCode) {
        setShort(true);
        setShortenedUrl(response.shortUrl);
        setQrCode(response.qrCode);
        setError(""); // Clear any previous errors
      } else {
        throw new Error("Incomplete response from server.");
      }
    } catch (error) {
      setShort(false);
      setShortenedUrl("");
      setQrCode("");
      setError(error.message || "Failed to shorten URL.");
    }
  };

  return (
    <div className="flex flex-col justify-center content-center items-center gap-4">
      <Header />
      <div className="flex gap-6 w-full justify-center h-16">
        <UrlInput
          name={"originalurl"}
          value={inputs.originalurl}
          onChange={changeHandler}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          isFocused={isFocused}
        />
        <ShortenButton
          onClick={shorteningHandler}
          isPressed={isPressed}
          setIsPressed={setIsPressed}
        />
      </div>
      {isshort && (
        <ResultSection shortenedUrl={shortenedUrl} qrCode={qrCode} />
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
