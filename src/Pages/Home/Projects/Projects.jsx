import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import p1 from '../../../assets/projects/p2.png';
import m1 from '../../../assets/projects/m1.png';
import p4 from '../../../assets/projects/p4.png';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        maxWidth: '650px',
        overflow: 'hidden',
        position: 'relative',
    },
    projectImage: {
        width: '100%',
        height: '100%',
        transition: 'transform 0.7s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    cardHover: {
        '&:hover $projectButton': {
            opacity: 1,
        },
    },
}));


const Projects = () => {
    const classes = useStyles();

    const projects = [
        {
            name: 'Musicine',
            description: 'Full stack development of an Education website. In the LandingPage there are Carousel, Popular added classes, And Popular Instructors.',
            image: m1,
            livePreviewLink: 'https://musicine-org.web.app/',
            githubLink: 'https://github.com/tonmoy-Org/summar-camp-school.git',
            technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React.Js', 'Node.Js', 'Express.Js', 'MongoDB'],
        },
        {
            name: 'Mentoring',
            description: 'Developed a responsive and interactive Online Courses & Education web app using MERN stack.',
            image: p4,
            livePreviewLink: 'https://mentoring-org.web.app/',
            githubLink: 'https://github.com/tonmoy-Org/collage-admission-project-client.git',
            technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React.Js', 'Node.Js', 'Express.Js', 'MongoDB'],
        },
        {
            name: 'Toy Zone',
            description: 'Developed a responsive and interactive Toys Marketplace web app using MERN stack.',
            image: p1,
            livePreviewLink: 'https://toy-market-place-fa2a9.web.app/',
            githubLink: 'https://github.com/tonmoy-Org/Toys-marketplace-client',
            technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React.Js', 'Node.Js', 'Express.Js', 'MongoDB'],
        },
    ];

    return (
        <div style={{ marginTop: '3rem', marginBottom: '5rem', maxWidth: 'xl', margin: 'auto', textAlign: 'center' }}>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <Typography variant="h4" style={{ color: '#4831d4', fontSize: '2.3rem', fontWeight: 'bold' }}>
                    Previously Done Some Project
                </Typography>
                <Typography variant="body1" style={{ paddingTop: '0.75rem', color: '#3d155f', fontSize: '18px' }}>
                    One of my 3 of work
                </Typography>
            </div>
            <Grid className='mx-3' sx={{ marginTop: 3, }} container spacing={8} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item key={index}>
                        <Card className={`${classes.projectCard} ${classes.cardHover}`} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                            <CardActionArea>
                                <Link to={project.livePreviewLink} target="_blank" rel="noopener noreferrer">
                                    <CardMedia
                                        component="img"
                                        alt={project.name}
                                        image={project.image}
                                        className={classes.projectImage}
                                    />
                                </Link>

                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.description}
                                </Typography>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                    {project.technologies.map((tech, index) => (
                                        <Typography key={index} variant="body2" component="span" color="textSecondary">
                                            {tech}
                                        </Typography>
                                    ))}
                                </div>
                            </CardContent>
                            <CardActions style={{ display: 'flex', }}>
                                <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <Button variant="contained" className="px-12 py-2 mt-10 text-white bg-gradient-to-r from-blue-500 to-[#cbf3819b] hover:gradient-hover focus:outline-none focus:border-blue-300 font-semibold">
                                        View Code
                                    </Button>
                                </Link>
                                <Typography className={classes.projectLink} variant="body2" component="p">
                                    <a href={project.livePreviewLink} target="_blank" rel="noopener noreferrer">Live preview</a>
                                </Typography>
                            </CardActions>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Projects;
