import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
`
const Line = styled.div`
    width: 350px;
    border-bottom: 1px solid #A8A8A8;
`
const Title = styled.div`
    font-size: 1.5rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
    text-align: center;
`

const Box = styled(Container)`
    width: 280px;
    height: 280px;
    margin: 5% 1% 2% 1%;
    background: #000000;
    box-sizing: border-box;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 8px;
    float: left;
    color: white;
    font-size: 1.5rem;
`

const Text = styled.a`
    text-align: center;
    color: #4F6CDE;
    margin-top: 3rem;
    font-size: 1rem;
`

class Tasks extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>

                <Container>

                    <Line />
                    <Title> We work across a range of areas and <br/> collaborate in many ways. </Title>
                    <Line />

                </Container>

                <Container>
                    <Text>
                        Check out our shared project board.
                    </Text>

                </Container>

                <Container>

                    <Box> Events & Meetups </Box>
                    <Box> Content & Creative </Box>
                    <Box> Community <br /> Development </Box>
                    <Box> Technical <br /> Contribution </Box>

                </Container>

            </div>

        );
    }
}


export default Tasks;