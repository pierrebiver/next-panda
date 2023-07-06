import {HStack} from '@/panda/jsx';
import {Heading} from "@/components/shared/Heading";

export default function Home() {
    return (
        <HStack fontSize="24px" p={25}>
            <Heading color={'blue.500'}>Hello 🐼</Heading>
        </HStack>
    )
}