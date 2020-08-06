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
  eventLocation: string;
  eventDetails: string;
  eventImage: File | string;
  end: string;
  start: string;
  eventType: string;
  organizerID: string;
  organizersDetails: OrganizerData | [{}];
  organizerName: string;
}

export { OrganizerData, Formdata, Organizer };
