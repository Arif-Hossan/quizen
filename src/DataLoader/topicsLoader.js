export const topicsLoader = async () =>{
    const topicsObject = await fetch ('https://openapi.programming-hero.com/api/quiz');
    const topicsData= topicsObject.json();
    return topicsData;

}