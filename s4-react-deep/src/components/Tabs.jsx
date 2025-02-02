import TabButton from "./TabButton";


export default function Tabs({ ButtonsContainer = "menu", ...props })
{
    return (
        <>
            <ButtonsContainer>
                {props.buttons}
            </ButtonsContainer>
            {props.children}
        </>
    )
}
