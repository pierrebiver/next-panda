import {Circle} from "@/panda/jsx";


export const Spinner = () => {

    return <Circle transform={'translate3d(-50%, -50%, 0)'} borderRadius={'50%'} animation={'1.5s linear infinite spinner'}
                   borderBottomWidth={'10px'} borderColor={'pink.200'} h={'md'} w={'sm'}>

    </Circle>
}