export default function RoundButton(props) {
  return (
    <button
      type="button"
      title={props.title}
      style={{
        aspectRatio: 1,
        ...props.style,
        fontSize: props.style?.fontSize || "1.6rem",
        height: props.style?.height || "2.7rem",
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
        borderRadius: "50%",
        
      }}
      onClick={props.onClick}
      className={"light-button"}
    >
     {props.icon}
    </button>
  );
}
