import { Link, Flex, Box, Heading, Avatar, Text, Badge, Divider, Stack, Grid, GridItem } from '@chakra-ui/react'
import './App.css';


const experiences = [{
  title: 'Target',
  subtitle: 'Senior Software Engineer',
  timeRange: '2017 - Current',
  body: `Worked on several UI's and API's across merchandise, supply chain, and dev-ops. 
  Built products from scratch and improved long-standing products.
  Led two-phase optimization effort, first identifying API bottlenecks via metrics and then optimizing via caching layer.
  Facilitated learning culture via regular engineering meetings.
  Contributed to innersource component library. 
  Built CodeSandbox clone for use with private npm registries.`,
  tags: ['TypeScript', 'React', 'Redux', 'Angular', 'Node', 'Docker'],
  color: 'red'
},{
  title: 'Rochester Institute of Technology',
  subtitle: 'BS in Computer Science - 3.95 GPA',
  timeRange: '2012-2017',
  body: `Studied Computer Science at RIT in Rochester, NY. In this time, I completed 4 years of study and 1 year of internships.
  I interned with Paychex as a Java Developer, Epic as a Data Scientist, and Target as a Software Engineer.
  `,
  tags: ['JavaScript', 'Python', 'Java', 'C', 'Django'],
  color: 'orange'
}]

const projects = [{
  title: 'Elementos',
  timeRange: '2020',
  body: `A framework-agnostic, reactive state management library.`,
  tags: ['TypeScript', 'npm'],
  color: 'blue',
  link: 'https://malerba118.github.io/elementos-docs/'
},{
  title: 'Snowbox',
  timeRange: '2020',
  body: `A CodeSandbox clone, built for internal use at Target.
  `,
  tags: ['Chakra-UI', 'React', "Node", 'Snowpack'],
  color: 'blue',
  link: 'https://drive.google.com/file/d/1li65WH-6ZmBRtGVtgz2-eIjkjoLS7F4j/view?usp=sharing'
},{
  title: 'react-esm-sandbox',
  timeRange: '2020',
  body: `React components to edit/interpret es modules in the browser.
  `,
  tags: ['TypeScript', 'React'],
  color: 'blue',
  link: 'https://github.com/malerba118/react-esm-sandbox'
},{
  title: 'react-particle-image',
  timeRange: '2020',
  body: `A React component that renders images as interactive particles.
  `,
  tags: ['TypeScript', 'React', 'npm'],
  color: 'blue',
  link: 'https://github.com/malerba118/react-particle-image'
},{
  title: 'Climax',
  timeRange: '2018',
  body: `A web app that matches you with US states based on your climate preferences.
  `,
  tags: ['JavaScript', 'React'],
  color: 'blue',
  link: 'https://malerba118.github.io/climax/#/'
},{
  title: 'Blog',
  timeRange: '2017 - 2020',
  body: `I write tech articles for freeCodeCamp, HackerNoon, and Better Programming.
  `,
  tags: ['JavaScript', 'React'],
  color: 'blue',
  link: 'https://austinmalerba.medium.com/'
}]

function App() {
  return (
    <Grid h="100%" placeItems="center">
        <Grid className="paper-container" p="1in" placeItems="center">
          <Box className="paper" w="8.5in" minW="8.5in" h="11in" p=".75in" rounded="md" boxShadow="lg" bg="white">
            <Stack spacing="5">
              <Flex>
                <Avatar src="me2.jpg" />
                <Box ml="3">
                  <Text fontWeight="bold">
                    Austin Malerba
                  </Text>
                  <Text fontSize="sm" fontWeight="500" color="gray.600">Web Developer</Text>
                </Box>
              </Flex>
              <Divider />
              {experiences.map(experience => (
                  <Stack key={experience.title} borderLeftColor={`${experience.color}.300`} borderLeftWidth="4px" px="2">
                    <Box>
                      <Flex align="center">
                        <Text size="sm" fontWeight="bold">
                          {experience.title}
                        </Text>
                        <Text fontSize="xs" fontWeight="600" color="gray.600" ml="2">
                          ({experience.timeRange})
                        </Text>
                      </Flex>
                      <Text  fontSize="sm" fontWeight="500" color="gray.600">{experience.subtitle}</Text>
                    </Box>
                    <Text fontSize="xs" fontWeight="400" color="gray.900">
                      {experience.body}
                    </Text>
                    <Stack isInline>
                      {experience.tags.map(tag => (
                        <Badge opacity={.75} fontSize=".66rem" variant="outline" key={tag} colorScheme={experience.color}>
                          {tag}
                        </Badge>
                      ))}
                    </Stack>
                </Stack>
              ))}
              <Text fontSize="xl" fontWeight="bold">Projects</Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {projects.map(project => (
                  <GridItem h="1.25in" colSpan={1} borderWidth={1} rounded="md">
                    <Flex direction="column" key={project.title} p={4} h="100%">
                      <Box>
                        <Text size="sm" fontWeight="bold">
                          <Link color="blue.500" isExternal href={project.link}>{project.title}</Link>
                        </Text>
                        <Text fontSize="sm" fontWeight="500" color="gray.600">{project.subtitle}</Text>
                      </Box>
                      <Text noOfLines={2} flex={1} fontSize="xs" fontWeight="400" color="gray.900">
                        {project.body}
                      </Text>
                      <Stack isInline>
                        {project.tags.map(tag => (
                          <Badge opacity={.75} fontSize=".66rem" variant="outline" key={tag} colorScheme={project.color}>
                            {tag}
                          </Badge>
                        ))}
                      </Stack>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Grid>
    </Grid>
  );
}

export default App;
