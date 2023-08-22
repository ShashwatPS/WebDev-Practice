function LandingPage(){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <div className={"containerLeft"}>
                        <div className={"text"}>
                            WELCOME
                        </div>
                        <div className={"description"}>
                            Stay organized and efficient with our sleek ToDo App. Easily manage tasks,
                            set due dates, and track progress. Experience productivity like never before.
                        </div>
                    </div>
                </Grid>
                <Grid item lg={6} className={"griditem"}>
                    <div className={"containerRight"}>
                        <TextSnippetIcon style={{
                            fontSize: 600,
                            color: "white",
                        }}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage;