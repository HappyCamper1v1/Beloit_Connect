import { getServerSession } from "next-auth";

export default async function about() {
  
    return (
        <div>  
            <div className="about-page-container">
                <h1 className="about-header">Welcome!</h1>
                <p className="about-page-text">Delighted to have you join us. This exceptional application unites students and alumni from various backgrounds, forging invaluable connections that strengthen camaraderie.</p>
                <p className="about-page-text">Networking with alumni offers students abundant advantages: <strong>mentorship, guidance, and insight</strong>  into diverse professions and career prospects. Nevertheless, establishing enduring bonds between students and alumni can be challenging.</p>
                <p className="about-page-text">Our innovative program bridges the communication divide, fostering engagement between students and alumni. Our comprehensive portal provides students with the means to locate alumni, peruse profiles, and initiate conversations. Alumni can effortlessly connect with students sharing similar interests.</p>
                <p className="about-page-text">The app aims to not only facilitate connections between students and alumni but also cultivate a robust sense of community. By uniting individuals from assorted backgrounds and experiences, we endeavor to construct a supportive environment where students and graduates can collaborate, exchange knowledge, and develop lasting relationships.</p>
            </div>
        </div>
    )
}
