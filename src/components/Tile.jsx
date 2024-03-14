const Tile = ({children,onClick,selected}) => (
    <button
        onClick={onClick}
        className={`Tile ${selected?"selected":""}`}>
        {children}
    </button>
)
export default Tile