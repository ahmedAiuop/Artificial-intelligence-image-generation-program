const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImage = async () => {
    // make a request to openai api
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify(
            {
                "prompt": inp.value,
                "n": 3,
                "size": "256x256"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    // parse the response as Json
    const data = await res.json()
    const listImages = data.data;
    images.innerHTML = ''
    listImages.map(image => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = image.url
    })
}