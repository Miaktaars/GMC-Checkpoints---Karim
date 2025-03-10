import Link from "next/link";

function Button({ text, icon, href }) {
    return(
    <Link href={`/${href}`}>
    <button className="transition ease-in-out delay-150 hover:-translate-y-[1px] hover:scale-110 duration-200 flex items-center gap-6 bg-[#181717] dark:bg-white p-3 rounded-lg text-slate-50 dark:text-[#181717]">
        {text} {icon}</button>
    </Link>
    )
}

export default Button;