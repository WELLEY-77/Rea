export default function Status() {
    
    const status = true
    
    return (
        <h2
        style={{
            backgroundColor:'transparent',
            color:status? 'green':'red'
        }}
        >
            Lorem, ipsum dolor: { status ? 'ON' : 'OFF' }
        </h2>
    )
}