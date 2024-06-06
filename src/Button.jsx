export default function Button({children , ...props}){
    return(
        <button {...props}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-green-700 text-black-400 hover:bg-green-600 hover:text-stone-100">
        {children}
        </button>
    );
}