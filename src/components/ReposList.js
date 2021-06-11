import React, { useState } from 'react'
import styled from "styled-components";
import RepoListElement from "./RepoListElement";
import Modal from "../modal/Modal";


const FlexBox = styled.div`
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
    `;

const List = styled.ul`
        padding: 0px;
        margin-bottom: 16px;
    `;

const Item = styled.li`
        list-style: none;
        margin-bottom: 8px;
        text-align: left;
    `;

const ReposList = ({ repos }) => {
    const [favRepos, setFavorite] = useState([])
    const [show, setShow] = useState(false);

    const doSetRepoAsFavorite = (id, payload) => {
        if (payload === true) {
            const reposToFav = repos.find(item => item.id === id);
            if (favRepos.length) {
                const index = favRepos.findIndex(item => item.id === id);
                if (index === -1) {
                    reposToFav.isFavorite = payload;
                    setFavorite([reposToFav, ...favRepos]);
                }
            } else {
                reposToFav.isFavorite = payload;
                setFavorite([reposToFav, ...favRepos]);
            }
        } else if (payload === false) {
            if (favRepos.length) {
                const index = favRepos.findIndex(item => item.id === id);
                if (index !== -1) {
                    favRepos.splice(index, 1);
                    setFavorite([...favRepos]);
                }
            }
        }
        setShow(true);
    }

    return (
        <div>
            <RepoListElement repos={repos} setFavorite={doSetRepoAsFavorite}></RepoListElement>
            <Modal title="Favorites Repositories" onClose={() => setShow(false)} show={show}>
                <List>
                    { favRepos.map((repo) =>
                        <Item key={repo.id}>
                            <h4>{repo.name}</h4>
                        </Item>
                    )}
                </List>
            </Modal>
        </div>
    );
}

export default ReposList;