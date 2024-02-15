import { RiWhatsappFill } from 'react-icons/ri';

import { ActionIcon, Affix } from '@mantine/core';

export default function WhatsAppFAB() {
  return (
    <a href="https://wa.me/+917539921784" aria-label="Whatsapp" role="link">
      <Affix position={{ bottom: 40, right: 40 }}>
        <ActionIcon color="green" radius="xl" size={60}>
          <RiWhatsappFill size={30} />
        </ActionIcon>
      </Affix>
    </a>
  );
}
