import React, {useCallback, useState} from 'react'
import useResults from "../hooks/useResults";
import styled from "styled-components";
import ReposList from "./ReposList";


const FlexBox = styled.div`
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
    `;

const Header = (props) => {
    const [username, setUsername] = useState("");
    const [searchApi, repos, errorMessage] = useResults();
    const onInputChanged = useCallback(({target: {value}}) => setUsername(value), []);

    return (
        <div className="Header">
            <div className="Title">GitHub Repositories App</div>

            <FlexBox>
                <input type="text"
                       value={username}
                       onChange={onInputChanged}/>

                <button type="button" onClick={() => searchApi(username)}>
                    Search
                </button>
            </FlexBox>

            <div>
                <ReposList repos={repos} ></ReposList>
            </div>
        </div>
    );
}

export default Header;