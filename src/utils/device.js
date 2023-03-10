export function isMobileDevice() {
    return navigator?.userAgentData?.mobile
    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}