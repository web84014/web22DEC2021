const d = document;
const $deviceMode = d.createElement('span');
$deviceMode.setAttribute('id', 'elementor-device-mode');
$deviceMode.setAttribute('class', 'elementor-screen-only');

let attached = false;

export default () => {
    if (!attached) {
        d.body.appendChild($deviceMode);
    }
    return getComputedStyle($deviceMode, ':after').content.replace(/"/g, '');
}
