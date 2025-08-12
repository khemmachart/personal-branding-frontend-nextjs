import { FC } from 'react';
import styled from 'styled-components';
import { areas } from 'libs/service';

const Page = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Container = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  margin: 2rem 0;
`;

const YearLabels = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const YearLabel = styled.div<{ children?: React.ReactNode }>`
  height: 10px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin: 1px 0;
`;

const Grid = styled.div<{ children?: React.ReactNode }>`
  display: grid;
  grid-template-columns: repeat(52, 10px);
  gap: 1px;
`;

const Cell = styled.div<{ intensity?: number; title?: string }>`
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  background: ${props => {
    if (!props.intensity) return 'white';
    const opacity = Math.min(0.1 + (props.intensity * 0.3), 1);
    return `rgba(0, 128, 0, ${opacity})`;
  }};

  &:hover {
    background: #eee;
    cursor: pointer;
  }
`;

const Footer = styled.p<{ children?: React.ReactNode }>`
  margin-top: 2rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const LifeCalendar: FC = () => {
  const YEARS = 90;
  const WEEKS_PER_YEAR = 52;

  // Function to extract all dates from the service data
  const getAllDates = () => {
    const dates = new Set<string>();
    
    areas.forEach(area => {
      area.subProjects.forEach(project => {
        // Add topic dates if they exist
        if (project.dates?.scheduledDate) dates.add(project.dates.scheduledDate);
        if (project.dates?.dueDate) dates.add(project.dates.dueDate);

        // Add task dates
        project.tasks?.forEach(task => {
          if (task.dates?.dueDate) dates.add(task.dates.dueDate);
        });

        // Add project and project task dates
        project.subProjects?.forEach(subProject => {
          if (subProject.dates?.dueDate) dates.add(subProject.dates.dueDate);
          subProject.tasks?.forEach(task => {
            if (task.dates?.dueDate) dates.add(task.dates.dueDate);
          });
        });
      });
    });

    return Array.from(dates).map(date => new Date(date));
  };

  // Get week number for a date
  const getWeekNumber = (date: Date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
    return Math.floor(days / 7);
  };

  // Calculate task density for each week
  const getWeekIntensity = () => {
    const dates = getAllDates();
    const weekCounts = new Map<string, number>();

    dates.forEach(date => {
      const year = date.getFullYear();
      const week = getWeekNumber(date);
      const key = `${year}-${week}`;
      weekCounts.set(key, (weekCounts.get(key) || 0) + 1);
    });

    return weekCounts;
  };

  const renderGrid = () => {
    const weekIntensity = getWeekIntensity();
    
    // Create year labels
    const yearLabels = [];
    for (let year = 0; year < YEARS; year++) {
      yearLabels.push(
        <YearLabel key={`year-${year}`}>
          {year}
        </YearLabel>
      );
    }
    
    // Modified cells creation
    const cells = [];
    for (let year = 0; year < YEARS; year++) {
      for (let week = 0; week < WEEKS_PER_YEAR; week++) {
        const intensity = weekIntensity.get(`${2025 + year}-${week}`) || 0;
        cells.push(
          <Cell 
            key={`${year}-${week}`}
            title={`Year ${year}, Week ${week + 1}`}
            intensity={intensity}
          />
        );
      }
    }

    return (
      <Container>
        <YearLabels>{yearLabels}</YearLabels>
        <Grid>{cells}</Grid>
      </Container>
    );
  };

  return (
    <Page>
      <h1>LIFE CALENDAR</h1>
      {renderGrid()}
      <Footer>LIVE EACH DAY AS IF YOUR LIFE HAD JUST BEGUN.</Footer>
    </Page>
  );
};

export default LifeCalendar;
