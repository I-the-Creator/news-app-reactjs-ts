const datePrepare = (value: string) => {
    const newDate = new Date(value);
    return { day: newDate.getDate(), month: newDate.getMonth() + 1}
}

export default datePrepare;