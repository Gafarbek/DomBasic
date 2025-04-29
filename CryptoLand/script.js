import { render } from "./utils/render.js";
import { baseButton, baseFeatures, baseFounder, comment, footerLink, GrafikStats, priceService, } from "./components/componet.js";

const link = document.querySelectorAll('.link')[1]
const form = document.forms['email']
const totalGrid  = document.querySelector('.totalGrid')
const totalBalance = document.querySelector('.totalBalance')
const features = document.querySelector('.features')
const founder = document.querySelector('.founder')
const priceForService = document.querySelector('.priceForService')
const links = document.querySelector('.links')
const comments = document.querySelector('.comments')
const ctaButton = document.querySelector('.ctaButton')

const ctaButtonGreen = [
    {
        ...buttons[0],
        text: 'Request Demo',
    },
    {
        ...buttons[0],
        text: 'Watch Video Demo',
        backColor: '#FFFFFF'
    }
]

const priceButton = {
    ...buttons[0],
    text: 'Contact us',
    weight: '400',
    padding: '19px 78px'
}

const priceButton2 = {
    ...buttons[0],
    text: 'Select Plan',
    backColor: 'white',
    border: 'solid',
    weight: '400',
    padding: '19px 78px'
}

const bookDemo = {...buttons[0],text: 'Book a Demo'}
const transfer = {
    ...buttons[0],
    text: 'Transfer ', 
    textColor: 'white',
    radius: '8px',
    padding: '10px 72px',
    weight: '500'
    
}

const managementButton = {
    ...buttons[0], text: 'Explore more'
}

const featuresInfo2 ={
    ...featuresInfo[0], 
    sideImg: './images/image.png',
    managementText: 'Real-time accounting<br>at your fingertips.',
    managementInfo: 'Take the pain out of book keeping! Wave goodbye to<br>mountains of paperwork and endless email reminders.<br>There`s now a new way of accounting.',
    backImage: './images/Group\ 299\(2\).png',
    backPosition: '0px 430px',
    height: '716px',
    width: '900px'
}

render(
    ctaButtonGreen,
    ctaButton,
    baseButton
)

render(
    commentInfo,
    comments,
    comment
)

render(
    plateform,
    links,
    footerLink
)


render(
    priceInfo,
    priceForService,
    priceService
)

const lowButton = document.querySelectorAll('.lowButton')
const titleButton = document.querySelector('.titleButton')

lowButton.forEach(button => {
    render(
        priceButton2,
        button,
        baseButton
    )
})

render(
    priceButton,
    titleButton,
    baseButton
)


render(
    founderInfo,
    founder,
    baseFounder
)

render(
    featuresInfo,
    features,
    baseFeatures
)

render(
    featuresInfo2,
    features,
    (elem) => baseFeatures(elem, true)
)

const managements = document.querySelectorAll('.management')


managements.forEach(management => {
    render(
        managementButton,
        management,
        baseButton
    );
});


render(
    transfer,
    totalBalance,
    baseButton
)

render(
    bookDemo,
    form,
    baseButton
)

render(
    buttons,
    link,
    baseButton
)

render(
    generalCharacteristics,
    totalGrid,
    GrafikStats
)