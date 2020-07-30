interface Organizer extends Record<number, string> {
  organizer_id: number;
  name: string;
}
interface OrganizerData extends Array<Organizer> {
  organizer_id: number;
  name: string;
}

interface Formdata {
  eventTitle: string;
  end: string;
  start: string;
  eventLocation: string;
  eventDetails: string;
  eventType: string;
  organizerID: number;
  organizersDetails: OrganizerData | [{}];
  organizerName: string;
  eventImage: string;
}

export { OrganizerData, Formdata, Organizer };
