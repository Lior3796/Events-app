
export const checkWindowWidth = (windowWidth) => {
    const result = windowWidth < 550;
    return result;
}

export const isValidValue = (e) => {
    let value = e.target.value;
    return value.replace(RegExp(/[^A-Z a-z]/gi), "");

}

export const ifUserRegistered = () => {
    const cookieValue = document.cookie
        .split('; ')
        ?.find(row => row.startsWith('jwtLogin='))
        ?.split('=')[1] || undefined;
    console.log(cookieValue);
    if (!cookieValue) return undefined;
    const userName = document.cookie
        .split('; ')
        .find(row => row.startsWith('userName='))
        .split('=')[1];
    console.log(userName);

    return userName
}