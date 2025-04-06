class GetRandomNumber {
    GetRandomNumber() {
    const min = 20;
    const max = 400;
    return  Math.floor(Math.random() * (max - min + 1) + min);
  }
}
export default new GetRandomNumber;
