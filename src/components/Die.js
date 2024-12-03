export default function Die(props) {
    return (
        <section className="die-button">
        <button>
            {props.value}
        </button>
        </section>
    )
}