export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <section className="die-button">
        
        <button style={styles} onClick={() => props.hold(props.id)}>
            {props.value}
        </button>
        </section>
    )
}