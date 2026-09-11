export default function Main() {
    const ingredients = ["chicken", "soup", "Tomatoes"]

    const ingriedientlist = ingredients.map(ingrient => (
        <li key={ingrient}>{ingrient}</li>
    ))

    function onsubmit(event){
        event.preventDefault()
        console.log("Form submitted")
        const formdata = new FormData(event.currentTarget)
        const newingredeint = formdata.get("ingredient")
        ingredients.push(newingredeint)
        console.log(ingredients)
    }
    return (
        <main>
            <form className="addIngForm" onSubmit={onsubmit}>
                <input 
                aria-label="Add ingredient"
                type="text"
                placeholder="e.g Oregano"
                name="ingredient" />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingriedientlist}
            </ul>
        </main>
    )
}