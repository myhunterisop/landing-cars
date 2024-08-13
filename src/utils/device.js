import enquireJs from 'enquire.js'

export const DeviceType = {
    desktop: 'desktop',
    tablet: 'tablet',
    vtablet: 'v-tablet',
    mobile: 'mobile'
}

export const deviceEnquire = function (callback) {
    const matchDesktop = {
        match: () => {
            callback && callback(DeviceType.desktop)
        }
    }

    const matchTablet = {
        match: () => {
            callback && callback(DeviceType.tablet)
        }
    }

    const matchVTablet = {
        match: () => {
            callback && callback(DeviceType.vtablet)
        }
    }

    const matchMobile = {
        match: () => {
            callback && callback(DeviceType.mobile)
        }
    }

    enquireJs
        .register('screen and (max-width: 599px)', matchMobile)
        .register('screen and (min-width: 600px) and (max-width: 1023px)', matchVTablet)
        .register('screen and (min-width: 1024px) and (max-width: 1359px)', matchTablet)
        .register('screen and (min-width: 1360px)', matchDesktop)
}
