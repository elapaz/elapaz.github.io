import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
    return (
        <Typography variant="body2" sx={{color: 'text.secondary', mt: 1}}>
            {' Eduardo Lapaz '}
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <React.Fragment>

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: {xs: 4, sm: 8},
                    py: {xs: 8, sm: 10},
                    textAlign: {sm: 'center', md: 'left'},
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: {xs: 4, sm: 8},
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <div>

                        <Copyright/>
                    </div>
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{justifyContent: 'left', color: 'text.secondary'}}
                    >
                        <IconButton
                            color="inherit"
                            size="small"
                            href="https://github.com/elapaz"
                            aria-label="GitHub"
                            sx={{alignSelf: 'center'}}
                        >
                            <GitHubIcon/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            size="small"
                            href="https://www.linkedin.com/in/eduardo-lapaz-1b691128/"
                            aria-label="LinkedIn"
                            sx={{alignSelf: 'center'}}
                        >
                            <LinkedInIcon/>
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    );
}
