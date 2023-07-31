import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function HOME() {
    return (
        <div>
            <Link href={"/sign-in"}>
                <Button variant={"primary"} size={"lg"}>LOGIN</Button>
            </Link>
            <Link href={"/sign-up"}>
                <Button variant={"destructive"} size={"lg"}>REGISTER</Button>
            </Link>
        </div>
    )
}
