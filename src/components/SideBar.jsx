export default function SideBar(props){
    const { handleToggleModal } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} 
            className="bgOverlay"></div>
            <div className="sidebarContents">
            <h2>Mars Landscape</h2>
            <div>
                <p>Description</p>
                <p>Mars very red and big and its covered with those martian soil(?)</p>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        </div>
    )
}