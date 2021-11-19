import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: 4rem auto;
`;

export const StyledButton = styled(IconButton)`
    position : fixed;
    z-index : 100%;
    right : 20px;
    top : 20px;
`;