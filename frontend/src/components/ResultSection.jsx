export function ResultSection({ shortenedUrl, qrCode }) {
    return (
      <div className="text-white mt-4">
        <p>
          Shortened URL:{" "}
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </p>
        {qrCode && (
          <div className="mt-4">
            <p>Scan QR Code:</p>
            <img src={qrCode} alt="QR Code" className="mt-2 w-32 h-32" />
          </div>
        )}
      </div>
    );
  }
  