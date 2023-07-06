import {Flex, FlexProps} from "@/panda/jsx";


export type AlertProps = FlexProps & {status: 'success' | 'error' }
export const Alert = (props: AlertProps) => {
    const {children, status, ...rest } = props;
    let bgColor = 'green.100';
    let color = 'green.700';
    if(status === 'error') {
        bgColor = 'red.100';
        color = 'red.700';
    }

    return <Flex p={2} gap={2} borderRadius={'md'} backgroundColor={bgColor} color={color} {...rest}>
        {children}
    </Flex>
}