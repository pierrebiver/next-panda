import {HStack} from '@/panda/jsx';
import {Heading} from "@/components/shared/Heading";
import {Text} from "@/components/shared/Text";
import {Alert} from "@/components/Alert";
import {Spinner} from "@/components/Spinner";

export default function Home() {
    return (
        <HStack fontSize="24px" p={25} alignContent={'center'} justifyContent={'center'}>
            <Spinner />
        </HStack>
    )
}