import React from 'react'
import styled from "styled-components";


const List = styled.ul`
        padding: 0px;
        margin-bottom: 16px;
    `;

const Item = styled.li`
        list-style: none;
        margin-bottom: 8px;
        text-align: left;
    `;

const Title = styled.h3`
        margin-bottom: 4px;
        margin-top: 32px;
        text-align: center;
        margin-right: 16px;
    `;

const FlexBox = styled.div`
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
    `;

const RepoListElement = ({ repos, setFavorite }) => (
    <List>
        { repos.map((repo) =>
            <Item key={repo.id}>
                <FlexBox>
                    <Title>{repo.name}</Title>
                    <div>
                        <button type="button" onClick={() => setFavorite(repo.id, true)} >
                            Like
                        </button>
                        <button type="button" onClick={() => setFavorite(repo.id, false)} >
                            Unlike
                        </button>
                    </div>
                </FlexBox>
                <List>
                    <Item>
                        Description: {repo.description}
                    </Item>
                    <Item>
                        Forks: {repo.forks_count}
                    </Item>
                    <Item>
                        Stars: {repo.stargazers_count}
                    </Item>
                </List>
            </Item>
        )}
    </List>
)

export default RepoListElement;