import CollapsibleSection from '@/components/ui/collapsible-section';
import ContactsList from '@/components/contacts/contacts-list';

function Sidebar() {
  return (
    <aside className="flex flex-col h-full lg:border-r lg:border-stroke">
      <CollapsibleSection label="contacts">
        <ContactsList />
      </CollapsibleSection>
    </aside>
  );
}
export default Sidebar;
