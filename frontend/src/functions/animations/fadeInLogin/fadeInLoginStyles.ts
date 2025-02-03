type leftSideProps = {
    LeftL: number
    TopL: number
}

export const leftSide = ({ LeftL, TopL }: leftSideProps) => ({
    position: 'absolute',
    left: `${LeftL}%`,
    top: `${TopL}%`,
    height: `25%`,
    width: `25%`,
    backgroundColor: 'black',
    zIndex: '1000',
});;
//--------------------------------------------------------------


type rightSideProps = {
    rightR: number
    BottomR: number
}

export const rightSide = ({ rightR, BottomR }: rightSideProps) => ({
    position: 'absolute',
    right: `${rightR}%`,
    bottom: `${BottomR}%`,
    height: `25%`,
    width: `25%`,   
    backgroundColor: 'black',
    zIndex: '1000',
});     
//--------------------------------------------------------------


export const login = {
position: 'absolute',
left: `50%`,
bottom: `50%`,
transform: `translate(-50%, 50%)`,
height: `40%`,
width: `40%`,   
backgroundColor: 'black',
zIndex: '1000',
display: 'flex',
justifyContent: 'center',
borderRadius: '20%',
};
//--------------------------------------------------------------
