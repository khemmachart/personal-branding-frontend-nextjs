import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

// Define design tokens directly to avoid import issues
const colors = {
  offWhite: '#FAF9F6',
  darkGray: '#333333',
  graphite: '#4A4A4A',
  accentBlue: '#3B82F6',
  softRed: '#EF4444',
  lightGray: '#E5E5E5',
  mutedSage: '#EAE8E1',
  white: '#FFFFFF',
};

const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '40px',
  xxxl: '48px',
};

// Basic styled components with proper TypeScript typing
const PageLayout = styled.div`
  min-height: 100vh;
  background-color: ${colors.offWhite};
  color: ${colors.darkGray};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
  padding-top: ${spacing.xl};
  padding-bottom: ${spacing.xl};
`;

const Section = styled.section`
  padding: ${spacing.xl} 0;
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.darkGray};
  margin-bottom: ${spacing.md};
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: ${spacing.md};
`;

interface BasicComponentProps {
  children?: ReactNode;
}

const H4 = styled.h4<BasicComponentProps>`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.darkGray};
  margin: 0;
`;

const Body = styled.p<BasicComponentProps>`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.darkGray};
  margin-bottom: ${spacing.md};
`;

const Caption = styled.span<BasicComponentProps>`
  font-size: 14px;
  color: ${colors.graphite};
`;

const Label = styled.label<BasicComponentProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.darkGray};
  margin-bottom: ${spacing.sm};
  display: block;
`;

const Link = styled.a<BasicComponentProps>`
  color: ${colors.accentBlue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Pre = styled.pre<BasicComponentProps>`
  background-color: ${colors.mutedSage};
  padding: ${spacing.md};
  border-radius: 6px;
  font-size: 14px;
  white-space: pre-wrap;
  margin: 0;
`;

interface FlexProps {
  justify?: string;
  align?: string;
  gap?: string;
  children?: ReactNode;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  gap: ${props => props.gap === 'medium' ? spacing.md : props.gap === 'small' ? spacing.sm : spacing.lg};
`;

interface GridProps {
  columns?: number;
  gap?: string;
  minWidth?: string;
  children?: ReactNode;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '200px'}, 1fr));
  gap: ${props => props.gap === 'small' ? spacing.md : spacing.lg};
  margin-top: ${spacing.md};
`;

// Custom styled components for trip-specific features
const DayCard = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  margin-bottom: ${spacing.lg};
  border-left: 4px solid ${colors.accentBlue};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardHeader = styled.div`
  border-bottom: 1px solid ${colors.lightGray};
  padding: ${spacing.lg};
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.darkGray};
  margin: 0 0 ${spacing.sm} 0;
`;

const CardContent = styled.div`
  padding: ${spacing.lg};
`;

// New carousel components
const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

interface CarouselWrapperProps {
  children?: ReactNode;
}

const CarouselWrapper = styled.div<CarouselWrapperProps>`
  display: flex;
  gap: ${spacing.md};
  overflow-x: auto;
  padding: ${spacing.md} 0;
  scrollbar-width: thin;
  scrollbar-color: ${colors.lightGray} transparent;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${colors.lightGray};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.accentBlue};
    border-radius: 3px;
  }
`;

interface ActivityCardProps {
  children?: ReactNode;
  onClick?: () => void;
}

const ActivityCard = styled.div<ActivityCardProps>`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  min-width: 280px;
  max-width: 280px;
  height: 220px;
  padding: ${spacing.md};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const TimeHeader = styled.div`
  background-color: ${colors.mutedSage};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 6px;
  margin-bottom: ${spacing.sm};
`;

interface DocumentCardProps {
  children?: ReactNode;
  onClick?: () => void;
}

const DocumentCard = styled.div<DocumentCardProps>`
  padding: ${spacing.md};
  background-color: ${colors.offWhite};
  border: 1px dashed ${colors.lightGray};
  border-radius: 8px;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${colors.mutedSage};
    border-color: ${colors.accentBlue};
    transform: translateY(-1px);
  }
`;

const DocumentIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${spacing.sm};
  color: ${colors.graphite};
`;

const MapContainer = styled.div`
  margin-top: ${spacing.md};
  border-radius: 8px;
  overflow: hidden;
  height: 300px;
  border: 1px solid ${colors.lightGray};
`;

const MapEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const NotesSection = styled.div`
  background-color: ${colors.offWhite};
  padding: ${spacing.md};
  border-radius: 6px;
  margin-top: ${spacing.md};
  border: 1px solid ${colors.lightGray};
`;

interface StatusBadgeProps {
  status: 'confirmed' | 'pending' | 'cancelled';
  children?: ReactNode;
}

const StatusBadge = styled.span<StatusBadgeProps>`
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  ${({ status }) => {
    switch (status) {
      case 'confirmed':
        return `background-color: #10B981; color: white;`;
      case 'pending':
        return `background-color: #F59E0B; color: white;`;
      case 'cancelled':
        return `background-color: ${colors.softRed}; color: white;`;
    }
  }}
`;

const InfoCard = styled.div`
  background-color: ${colors.mutedSage};
  border-radius: 8px;
  padding: ${spacing.lg};
  text-align: center;
  margin-top: ${spacing.xl};
`;

// Modal components
interface ModalOverlayProps {
  children?: ReactNode;
  onClick?: () => void;
}

const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${spacing.lg};
`;

interface ModalContentProps {
  children?: ReactNode;
  onClick?: (e: any) => void;
}

const ModalContent = styled.div<ModalContentProps>`
  background-color: ${colors.white};
  border-radius: 12px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  width: 100%;
`;

const ModalHeader = styled.div`
  padding: ${spacing.lg};
  border-bottom: 1px solid ${colors.lightGray};
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 1;
`;

const ModalBody = styled.div`
  padding: ${spacing.lg};
`;

interface CloseButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const CloseButton = styled.button<CloseButtonProps>`
  position: absolute;
  top: ${spacing.md};
  right: ${spacing.md};
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${colors.graphite};
  
  &:hover {
    color: ${colors.darkGray};
  }
`;

// Sample trip data structure
interface TripDocument {
  id: string;
  name: string;
  type: 'boarding_pass' | 'hotel' | 'ticket' | 'passport' | 'insurance' | 'other';
  url?: string;
}

interface TimeSlot {
  id: string;
  time: string;
  title: string;
  description: string;
  location?: string;
  googleMapsUrl?: string;
  notes?: string;
  documents: TripDocument[];
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface TripDay {
  id: string;
  date: string;
  city: string;
  timeSlots: TimeSlot[];
}

const TripPlanningPage: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<TimeSlot | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<TripDocument | null>(null);
  
  // Sample data - in a real app, this would come from an API or state management
  const [tripData] = useState<TripDay[]>([
    {
      id: '1',
      date: '2024-01-04',
      city: 'Bangkok, Thailand',
      timeSlots: [
        {
          id: '1-1',
          time: '23:10',
          title: 'Flight Departure to Japan',
          description: 'ZIPAIR ZG052 from Suvarnabhumi Airport to Narita International Airport T1',
          location: 'Suvarnabhumi Airport (BKK)',
          googleMapsUrl: 'https://maps.google.com/maps?q=Suvarnabhumi+Airport+Bangkok&t=&z=13&ie=UTF8&iwloc=&output=embed',
          notes: 'Late night departure. Arrive at airport 2-3 hours early for international flight. Flight reference: A89ZEB',
          documents: [
            { 
              id: 'd1', 
              name: 'Boarding Pass - ZG052', 
              type: 'boarding_pass',
              url: '/documents/Confirmation_for_Booking.pdf'
            },
            { 
              id: 'd2', 
              name: 'Flight Ticket PDF', 
              type: 'ticket',
              url: '/documents/Confirmation_for_Booking.pdf'
            },
            { 
              id: 'd3', 
              name: 'Travel Plan PDF', 
              type: 'other',
              url: '/documents/Confirmation_for_Booking.pdf'
            }
          ],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '2',
      date: '2024-01-05',
      city: 'Tokyo, Japan',
      timeSlots: [
        {
          id: '2-1',
          time: '07:30',
          title: 'Arrival in Japan',
          description: 'Landing at Narita International Airport and city exploration',
          location: 'Narita International Airport Terminal 1',
          googleMapsUrl: 'https://maps.google.com/maps?q=Narita+International+Airport&t=&z=13&ie=UTF8&iwloc=&output=embed',
          notes: 'Immigration and customs. Explore Tokyo in the morning after arrival.',
          documents: [],
          status: 'confirmed'
        },
        {
          id: '2-2',
          time: '15:00',
          title: 'Hotel Check-in Tokyo',
          description: 'Check-in at LANDABOUT TOKYO',
          location: 'LANDABOUT TOKYO',
          googleMapsUrl: 'https://maps.google.com/maps?q=LANDABOUT+TOKYO&t=&z=15&ie=UTF8&iwloc=&output=embed',
          notes: 'Hotel booked via Agoda. Booking ID: 1903057694',
          documents: [
            { 
              id: 'd4', 
              name: 'Hotel Confirmation (4-7 Jan)', 
              type: 'hotel',
              url: '/documents/Confirmation_for_Booking.pdf'
            }
          ],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '3',
      date: '2024-01-06',
      city: 'Mount Fuji, Japan',
      timeSlots: [
        {
          id: '3-1',
          time: '06:45',
          title: 'Bus to Mount Fuji',
          description: 'Highway bus departure to Mount Fuji 5th Station',
          location: 'Tokyo Bus Terminal',
          googleMapsUrl: 'https://maps.google.com/maps?q=Tokyo+to+Mount+Fuji+bus&t=&z=12&ie=UTF8&iwloc=&output=embed',
          notes: 'Seats 9ABCD 10CD. Arrive 10-15 minutes early. Buy water and snacks beforehand - cheaper than at Mount Fuji. Bus arrives at 09:20.',
          documents: [
            { id: 'd5', name: 'Highway Bus Ticket', type: 'ticket' },
            { id: 'd6', name: 'Mount Fuji Climbing Guide', type: 'other' }
          ],
          status: 'confirmed'
        },
        {
          id: '3-2',
          time: '10:30',
          title: 'Mount Fuji Climbing Start',
          description: 'Begin climbing Mount Fuji (3,776m) - Yoshida Trail',
          location: 'Mount Fuji 5th Station',
          googleMapsUrl: 'https://maps.google.com/maps?q=Mount+Fuji+5th+Station&t=&z=14&ie=UTF8&iwloc=&output=embed',
          notes: 'Climbing preparation, rent equipment if needed. Take it easy and steady. Watch preparation videos provided.',
          documents: [
            { id: 'd7', name: 'Climbing Preparation Video 1', type: 'other' },
            { id: 'd8', name: 'Climbing Preparation Video 2', type: 'other' }
          ],
          status: 'confirmed'
        },
        {
          id: '3-3',
          time: '20:00',
          title: 'Mountain Hut Overnight',
          description: 'Stay at Taishikan Hut (8th Station)',
          location: 'Taishikan Hut, Mount Fuji 8th Station',
          googleMapsUrl: 'https://maps.google.com/maps?q=Mount+Fuji+8th+Station&t=&z=15&ie=UTF8&iwloc=&output=embed',
          notes: 'Mountain hut accommodation near 8th Station First Aid. Booking confirmed via Peek.com',
          documents: [
            { id: 'd9', name: 'Mountain Hut Booking', type: 'hotel' }
          ],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '4',
      date: '2024-01-07',
      city: 'Kawaguchiko, Japan',
      timeSlots: [
        {
          id: '4-1',
          time: '14:00',
          title: 'Meet at Kawaguchiko',
          description: 'Group meetup and check-in at accommodation',
          location: 'The Garden Resort & Condominium, Kawaguchiko',
          googleMapsUrl: 'https://maps.app.goo.gl/iQG9FDkTJAybtUzR9',
          notes: 'Airbnb accommodation in Kawaguchiko area. Rest and recovery after Mount Fuji climbing.',
          documents: [
            { id: 'd10', name: 'Kawaguchiko Airbnb Booking', type: 'hotel' }
          ],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '5',
      date: '2024-01-08',
      city: 'Tokyo, Japan',
      timeSlots: [
        {
          id: '5-1',
          time: '09:00',
          title: 'Fuji-Q Highland',
          description: 'Visit Fuji-Q Highland amusement park',
          location: 'Fuji-Q Highland',
          googleMapsUrl: 'https://maps.google.com/maps?q=Fuji-Q+Highland&t=&z=14&ie=UTF8&iwloc=&output=embed',
          notes: 'Famous amusement park with extreme roller coasters and Mount Fuji views.',
          documents: [],
          status: 'confirmed'
        },
        {
          id: '5-2',
          time: '15:00',
          title: 'Return to Tokyo',
          description: 'Travel back to Tokyo in the evening',
          location: 'LANDABOUT TOKYO',
          googleMapsUrl: 'https://maps.google.com/maps?q=LANDABOUT+TOKYO&t=&z=15&ie=UTF8&iwloc=&output=embed',
          notes: 'Return to LANDABOUT TOKYO hotel. Booking ID: 1903055381 (8-12 Jan)',
          documents: [
            { id: 'd11', name: 'Hotel Confirmation (8-12 Jan)', type: 'hotel' }
          ],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '6',
      date: '2024-01-09',
      city: 'Kamakura, Japan',
      timeSlots: [
        {
          id: '6-1',
          time: '09:00',
          title: 'One Day Trip to Kamakura',
          description: 'Day trip to historic Kamakura (1-1.5 hours from Tokyo by train)',
          location: 'Kamakura',
          googleMapsUrl: 'https://maps.google.com/maps?q=Kamakura+Japan&t=&z=12&ie=UTF8&iwloc=&output=embed',
          notes: 'Historic city near Tokyo. Famous for the Great Buddha statue, temples, and traditional atmosphere.',
          documents: [],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '7',
      date: '2024-01-10',
      city: 'Tokyo, Japan',
      timeSlots: [
        {
          id: '7-1',
          time: '10:00',
          title: 'Harry Potter Studio',
          description: 'Visit the Warner Bros. Studio Tour Tokyo',
          location: 'Warner Bros. Studio Tour Tokyo',
          googleMapsUrl: 'https://maps.google.com/maps?q=Warner+Bros+Studio+Tour+Tokyo&t=&z=14&ie=UTF8&iwloc=&output=embed',
          notes: 'Making of Harry Potter studio experience. Book tickets in advance.',
          documents: [],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '8',
      date: '2024-01-11',
      city: 'Tokyo, Japan',
      timeSlots: [
        {
          id: '8-1',
          time: '09:00',
          title: 'Tokyo Disneyland',
          description: 'Full day at Tokyo Disneyland',
          location: 'Tokyo Disneyland',
          googleMapsUrl: 'https://maps.google.com/maps?q=Tokyo+Disneyland&t=&z=14&ie=UTF8&iwloc=&output=embed',
          notes: 'Full day at the magical Tokyo Disneyland. Arrive early for popular attractions.',
          documents: [],
          status: 'confirmed'
        },
        {
          id: '8-2',
          time: '18:00',
          title: 'Dinner at Tokyo Station',
          description: 'Dinner at a local restaurant near Tokyo Station',
          location: 'Tokyo Station',
          googleMapsUrl: 'https://maps.google.com/maps?q=Tokyo+Station+Restaurants&t=&z=14&ie=UTF8&iwloc=&output=embed',
          notes: 'Explore the local cuisine options near Tokyo Station after a day at Disneyland.',
          documents: [],
          status: 'confirmed'
        }
      ]
    },
    {
      id: '9',
      date: '2024-01-12',
      city: 'Tokyo, Japan',
      timeSlots: [
        {
          id: '9-1',
          time: '09:00',
          title: 'Shopping and Exploration',
          description: 'Last-minute shopping and city exploration',
          location: 'Tokyo City Center',
          googleMapsUrl: 'https://maps.google.com/maps?q=Tokyo+shopping+districts&t=&z=12&ie=UTF8&iwloc=&output=embed',
          notes: 'Final day shopping, souvenirs, and preparing for departure.',
          documents: [],
          status: 'confirmed'
        },
        {
          id: '9-2',
          time: '11:00',
          title: 'Hotel Checkout',
          description: 'Check out from LANDABOUT TOKYO and prepare for departure',
          location: 'LANDABOUT TOKYO',
          googleMapsUrl: 'https://maps.google.com/maps?q=LANDABOUT+TOKYO&t=&z=15&ie=UTF8&iwloc=&output=embed',
          notes: 'Final checkout from Tokyo hotel. Store luggage if needed for last-minute activities.',
          documents: [],
          status: 'confirmed'
        },
        {
          id: '9-3',
          time: '17:00',
          title: 'Departure to Narita Airport',
          description: 'Travel to Narita International Airport for departure',
          location: 'Narita International Airport Terminal 1',
          googleMapsUrl: 'https://maps.google.com/maps?q=Narita+International+Airport&t=&z=13&ie=UTF8&iwloc=&output=embed',
          notes: 'Flight reference: 8EHYPD. Arrive at airport 2-3 hours before international departure.',
          documents: [
            { id: 'd12', name: 'Return Flight Boarding Pass', type: 'boarding_pass' }
          ],
          status: 'confirmed'
        },
        {
          id: '9-4',
          time: '21:40',
          title: 'Arrival in Bangkok',
          description: 'Landing at Suvarnabhumi Airport, Bangkok',
          location: 'Suvarnabhumi Airport (BKK)',
          googleMapsUrl: 'https://maps.google.com/maps?q=Suvarnabhumi+Airport+Bangkok&t=&z=13&ie=UTF8&iwloc=&output=embed',
          notes: 'End of Japan trip. Immigration and baggage claim in Bangkok.',
          documents: [],
          status: 'confirmed'
        }
      ]
    }
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getDocumentIcon = (type: TripDocument['type']) => {
    switch (type) {
      case 'boarding_pass': return '✈️';
      case 'hotel': return '🏨';
      case 'ticket': return '🎫';
      case 'passport': return '📘';
      case 'insurance': return '🛡️';
      default: return '📄';
    }
  };

  const getDocumentLabel = (type: TripDocument['type']) => {
    switch (type) {
      case 'boarding_pass': return 'Boarding Pass';
      case 'hotel': return 'Hotel Document';
      case 'ticket': return 'Ticket';
      case 'passport': return 'Passport';
      case 'insurance': return 'Insurance';
      default: return 'Document';
    }
  };

  const handleActivityClick = (activity: TimeSlot) => {
    setSelectedActivity(activity);
  };

  const handleCloseModal = () => {
    setSelectedActivity(null);
  };

  const handleDocumentClick = (document: TripDocument) => {
    setSelectedDocument(document);
  };

  const handleCloseDocumentModal = () => {
    setSelectedDocument(null);
  };

  return (
    <PageLayout>
      <Container>
        <Section>
          <H1>🧳 Japan Trip - Tokyo & Mount Fuji Adventure</H1>
          <Body>
            Complete 9-day Japan itinerary including Mount Fuji climbing, Tokyo attractions, and all travel documents organized by day and time.
          </Body>
        </Section>

        {tripData.map((day) => (
          <DayCard key={day.id}>
            <CardHeader>
              <Flex justify="space-between" align="center">
                <div>
                  <CardTitle>{formatDate(day.date)}</CardTitle>
                  <Caption>📍 {day.city}</Caption>
                </div>
                <StatusBadge status="confirmed">
                  {day.timeSlots.length} activities planned
                </StatusBadge>
              </Flex>
            </CardHeader>

            <CardContent>
              <CarouselContainer>
                <CarouselWrapper>
                  {day.timeSlots.map((slot) => (
                    <ActivityCard key={slot.id} onClick={() => handleActivityClick(slot)}>
                      <TimeHeader>
                        <Flex align="center" gap="small">
                          <H4 style={{ margin: 0, color: colors.darkGray, fontSize: '16px' }}>
                            🕐 {slot.time}
                          </H4>
                          <StatusBadge status={slot.status}>
                            {slot.status}
                          </StatusBadge>
                        </Flex>
                      </TimeHeader>

                      <H4 style={{ fontSize: '16px', marginBottom: spacing.sm }}>{slot.title}</H4>
                      <Body style={{ fontSize: '14px', marginBottom: spacing.sm }}>
                        {slot.description.length > 60 
                          ? `${slot.description.substring(0, 60)}...` 
                          : slot.description}
                      </Body>

                      {slot.location && (
                        <Caption>📍 {slot.location}</Caption>
                      )}

                      {slot.documents.length > 0 && (
                        <div style={{ marginTop: spacing.sm }}>
                          <Caption>📎 {slot.documents.length} documents</Caption>
                        </div>
                      )}
                    </ActivityCard>
                  ))}
                </CarouselWrapper>
              </CarouselContainer>
            </CardContent>
          </DayCard>
        ))}

        {/* Modal for Activity Details */}
        {selectedActivity && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
              
              <ModalHeader>
                <TimeHeader>
                  <Flex align="center" gap="medium">
                    <H4 style={{ margin: 0, color: colors.darkGray }}>
                      🕐 {selectedActivity.time}
                    </H4>
                    <StatusBadge status={selectedActivity.status}>
                      {selectedActivity.status}
                    </StatusBadge>
                  </Flex>
                </TimeHeader>
                <H3>{selectedActivity.title}</H3>
              </ModalHeader>

              <ModalBody>
                <Body>{selectedActivity.description}</Body>

                {selectedActivity.location && (
                  <div>
                    <Label>📍 Location:</Label>
                    <Body style={{ marginTop: spacing.xs }}>
                      {selectedActivity.location}
                    </Body>
                  </div>
                )}

                {selectedActivity.notes && (
                  <NotesSection>
                    <Label>📝 Notes:</Label>
                    <Pre style={{ margin: 0, marginTop: spacing.xs, fontSize: '14px' }}>
                      {selectedActivity.notes}
                    </Pre>
                  </NotesSection>
                )}

                {selectedActivity.documents.length > 0 && (
                  <div>
                    <Label style={{ marginTop: spacing.md }}>📎 Documents:</Label>
                    <Grid columns={2} gap="small" minWidth="200px">
                      {selectedActivity.documents.map((doc) => (
                        <DocumentCard key={doc.id} onClick={() => handleDocumentClick(doc)}>
                          <DocumentIcon>
                            {getDocumentIcon(doc.type)}
                          </DocumentIcon>
                          <Body style={{ margin: 0, fontSize: '14px', textAlign: 'center' }}>
                            {doc.name}
                          </Body>
                          <Caption style={{ marginTop: spacing.xs }}>
                            {getDocumentLabel(doc.type)}
                          </Caption>
                        </DocumentCard>
                      ))}
                    </Grid>
                  </div>
                )}

                {selectedActivity.googleMapsUrl && (
                  <div>
                    <Label style={{ marginTop: spacing.md }}>🗺️ Map:</Label>
                    <Flex align="center" gap="small" style={{ marginTop: spacing.xs }}>
                      <Link 
                        href={selectedActivity.googleMapsUrl.replace('&output=embed', '')} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </Link>
                      <Caption>•</Caption>
                      <Caption>View embedded map below</Caption>
                    </Flex>
                    <MapContainer>
                      <MapEmbed
                        src={selectedActivity.googleMapsUrl}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map for ${selectedActivity.title}`}
                      />
                    </MapContainer>
                  </div>
                )}
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}

        <InfoCard>
          <H3>✨ Trip Planning Assistant</H3>
          <Body>
            This interactive page displays your complete travel itinerary. Click on any activity card to view full details including documents, maps, and notes.
          </Body>
          <Body style={{ marginTop: spacing.md }}>
            <strong>Features included:</strong><br/>
            📅 Day-by-day organization • 🕐 Time-based scheduling • 📝 Detailed notes<br/>
            📎 Document attachments • 🗺️ Google Maps integration • 🎯 Interactive carousel view
          </Body>
        </InfoCard>

        {/* Document Modal */}
        {selectedDocument && (
          <ModalOverlay onClick={handleCloseDocumentModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleCloseDocumentModal}>&times;</CloseButton>
              
              <ModalHeader>
                <H3>{selectedDocument.name}</H3>
                <Caption>{getDocumentLabel(selectedDocument.type)}</Caption>
              </ModalHeader>

              <ModalBody>
                <div style={{ textAlign: 'center', marginBottom: spacing.lg }}>
                  <DocumentIcon style={{ fontSize: '72px' }}>
                    {getDocumentIcon(selectedDocument.type)}
                  </DocumentIcon>
                </div>

                <Body style={{ textAlign: 'center', marginBottom: spacing.lg }}>
                  📄 <strong>{selectedDocument.name}</strong>
                </Body>

                {selectedDocument.url && (
                  <div style={{ marginTop: spacing.lg }}>
                    <iframe
                      src={selectedDocument.url}
                      style={{
                        width: '100%',
                        height: '500px',
                        border: `1px solid ${colors.lightGray}`,
                        borderRadius: '8px'
                      }}
                      title={selectedDocument.name}
                    />
                  </div>
                )}

                <div style={{ marginTop: spacing.lg, textAlign: 'center' }}>
                  <Link
                    href={selectedDocument.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block',
                      padding: `${spacing.sm} ${spacing.md}`,
                      backgroundColor: colors.accentBlue,
                      color: colors.white,
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: '500'
                    }}
                  >
                    📥 Download Document
                  </Link>
                </div>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </PageLayout>
  );
};

export default TripPlanningPage;
