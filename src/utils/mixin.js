import { useStore } from '@/store'
import { deviceEnquire, DeviceType } from '@/utils/device'
const { setDevice } = useStore()

const AppDeviceEnquire = () => {
    deviceEnquire((deviceType) => {
        switch (deviceType) {
        case DeviceType.desktop:
            setDevice('desktop')
            break
        case DeviceType.tablet:
            setDevice('tablet')
            break
        case DeviceType.vtablet:
            setDevice('v-tablet')
            break
        case DeviceType.mobile:
        default:
            setDevice('mobile')
            break
        }
    })
}

export { AppDeviceEnquire }
