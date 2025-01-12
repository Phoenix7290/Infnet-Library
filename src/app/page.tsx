import { Card } from "@/components";
import { Footer, Header } from "@/layout";

export default function Home() {
    return (
        <div>
            <Header Title={"Infnet Library"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <Card title="Fundamentos de Software" href="/blocos/Front-End" />
                <Card title="Front End" href="/blocos/Fundamentos" />
                <Card title="Blocos" href="/blocos" />
            </div>
            <Footer />
        </div>
    );
}
