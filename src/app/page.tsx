import {HStack} from '@/panda/jsx';
import {Heading} from "@/components/shared/Heading";
import {Text} from "@/components/shared/Text";
import {Alert} from "@/components/Alert";

export default function Home() {
    return (
        <HStack fontSize="24px" p={25}>
            <Alert status={'error'}>
                <Heading>
                    This is an alert
                </Heading>
                <Text>
                    Alert content
                </Text>
            </Alert>
        </HStack>
    )
}