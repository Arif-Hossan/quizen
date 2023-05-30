export const topicsLoader = async () =>{
    const topicsObject = await fetch ('https://openapi.programming-hero.com/api/quiz');
    console.log(topicsObject.data);

}