import Button from "@/components/button";
import Header from "@/components/header";
import Social from "@/components/social";
function Contact() {
    const inputStyle="text-black h-11 rounded-[7px] bg-transparent border-[2px] placeholder-gray-500 border-gray-500 focus:border-black focus:placeholder-black dark:focus:placeholder-white dark:text-white"
    return(
        <div>
            <Header/>
            <div className="flex gap-[100px] flex-row items-center place-content-center mt-[7%]" >
            <div>
            <h2>Get in touch or shoot me an email directly on <br /> meissambaye09@gmail.com</h2>
            <Social/>
            </div>
            <form className="flex gap-10 flex-col w-[500px]" action="submit">
                <input className={inputStyle} type="text" placeholder="Name"/>
                <input className={inputStyle} type="email" placeholder="Email" />
                <input className={inputStyle} type="text" placeholder="Subject" />
                <textarea className={inputStyle} rows="5" type="text" placeholder="Your message..."/>
                <Button text="Send" href="contact"/>
            </form>
            </div>
        </div>
    )
}

export default Contact;