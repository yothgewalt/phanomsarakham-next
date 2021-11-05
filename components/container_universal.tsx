const Container: React.FunctionComponent<{ children: any }> = (props) => {
    return (
        <div className="h-full container px-4 mx-auto max-w-7xl">
            {props.children}
        </div>
    );
};

export default Container;
