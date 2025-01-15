export function InputFields({ image, text, type, value, name, onChange }) {
    return (
      <div className="relative w-3/4 ml-12 mt-2">
        <img src={image} className="absolute transform translate-x-1 translate-y-1.5 w-8 h-8" alt="icon" />
        <input
          className="outline-none w-full rounded-3xl placeholder-yellow-200 pt-2 pb-2 pl-12 text-xl text-white bg-blue-800 focus:bg-gradient-to-r from-[#221aa6] to-[#f028ba]"
          placeholder={text}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </div>
    );
  }
  // bg-gradient-to-r from-[#221aa6] to-[#f028ba]