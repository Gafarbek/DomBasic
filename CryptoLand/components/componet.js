export function GrafikStats(item) {
    const total = document.createElement('div')
    if (item.classes) total.classList.add(...item.classes)
    
    const textInfo = document.createElement('div')
    if (item.textClasses) textInfo.classList.add(...item.textClasses)

    const grafik = document.createElement('div')
    if (item.grafikClasses) grafik.classList.add(...item.grafikClasses)

    const p = document.createElement('p')
    const h2 = document.createElement('h2')
    const h5 = document.createElement('h5')
    const img = document.createElement('img')
    
    
    if (item.src) img.src = item.src
    if (item.info) p.innerHTML = item.info
    if (item.price) h2.innerHTML = item.price
    if (item.reminder) h5.innerHTML = item.reminder
    if (item.color) h5.style.color = item.color

    textInfo.append(p, h2)
    grafik.append(h5, img)
    total.append(textInfo, grafik)

    return total
}

export function baseButton(btn) {
    const button = document.createElement('button')
    
    if (btn.text) button.innerHTML = btn.text
    if (btn.textColor) button.style.color = btn.textColor
    if (btn.radius) button.style.borderRadius = btn.radius
    if (btn.backColor) button.style.backgroundColor = btn.backColor
    if (btn.padding) button.style.padding = btn.padding
    if (btn.weight) button.style.fontWeight = btn.weight
    if (btn.size) button.style.fontSize = btn.size
    if (btn.border) button.style.borderStyle = btn.border

    return button
}

export function baseFeatures(elem, swap = false) {
    const body = document.createElement('div')
    if (elem.bodyClasses) body.classList.add(...elem.bodyClasses)

    const group = document.createElement('div')        
    if (elem.groupClasses) group.classList.add(...elem.groupClasses)
        
    const rightSIde = document.createElement('div')        
    if (elem.sideClasses) rightSIde.classList.add(...elem.sideClasses)

    const management = document.createElement('div')
    if (elem.managementClasses) management.classList.add(...elem.managementClasses)

    const p = document.createElement('p')
    const h3 = document.createElement('h3')
    const img = document.createElement('img')

    if (elem.backPosition) rightSIde.style.backgroundPosition = elem.backPosition
    if (elem.backImage) rightSIde.style.backgroundImage = `url('${elem.backImage}')`
    if (elem.sideImg) img.src = elem.sideImg
    if (elem.managementText) h3.innerHTML = elem.managementText
    if (elem.managementInfo) p.innerHTML = elem.managementInfo
    if (elem.height) rightSIde.style.height = elem.height
    if (elem.width) rightSIde.style.width = elem.width
    
    management.append(h3, p)
    rightSIde.append(img)
    
    if (swap) {
        group.append(management, rightSIde)
    } else {
        group.append(rightSIde, management)
    }

    body.append(group)

    return body
}

export function baseFounder(prs) {
    const person = document.createElement('div')
    if (prs.personClasses) person.classList.add(...prs.personClasses)

    const info = document.createElement('div')        
    if (prs.info) info.classList.add(...prs.info)

    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    if (prs.personImg) img.src = prs.personImg
    if (prs.personInfo) h2.innerHTML = prs.personInfo
    if (prs.personText) p.innerHTML = prs.personText

    info.append(h2, p)
    person.append(img, info)

    return person
}



export function priceService(item) {
    const block = document.createElement('div')
    if (item.blockClasses) block.classList.add(...item.blockClasses)

    const blockTitle = document.createElement('div')
    if (item.titleClasses) blockTitle.classList.add(...item.titleClasses)

    const buttons = document.createElement('div')
    if (item.buttonsClasses) buttons.classList.add(...item.buttonsClasses)

    const h3 = document.createElement('h3')
    const h2 = document.createElement('h2')

    if (item.h3Color) h3.style.color = item.h3Color
    if (item.title) h3.innerHTML = item.title
    if (item.price) h2.innerHTML = item.price

    blockTitle.append(h3, h2)
    block.append(blockTitle, buttons)
    
    if (Array.isArray(item.pTexts)) {
        for (const text of item.pTexts) {
            const p = document.createElement('p')
            p.innerHTML = text
            blockTitle.append(p)
        }
    }
    
    return block
}

export function footerLink(item) {
    const block = document.createElement('div')
    if (item.linkClasses) block.classList.add(...item.linkClasses)
    
    const h2 = document.createElement('h2')
    
    if (item.linkInfo) h2.innerHTML = item.linkInfo

    block.append(h2)

    if (Array.isArray(item.linkText)) {
        for (const text of item.linkText) {
            const p = document.createElement('p')
            p.innerHTML = text
            block.append(p)
        }
    }

    return block
}

export function comment(item) {
    const comment = document.createElement('div')
    if (item.commentClasses) comment.classList.add(...item.commentClasses)
    
    const user = document.createElement('div')
    if (item.userClasses) user.classList.add(...item.userClasses)
        
    const userInfo = document.createElement('div')
    if (item.infoClasses) userInfo.classList.add(...item.infoClasses)
    
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const avatar = document.createElement('img')
    const star = document.createElement('img')

    if (item.commentText) p.innerHTML = item.commentText
    if (item.userName) h3.innerHTML = item.userName
    if (item.userAvatar) avatar.src = item.userAvatar
    if (item.userWidth) avatar.style.width = item.userWidth
    if (item.userHeight) avatar.style.height = item.userHeight
    if (item.userStar) star.src = item.userStar

    userInfo.append(h3, star)
    user.append(avatar, userInfo)
    comment.append(p, user)

    return comment
}