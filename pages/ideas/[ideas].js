import { Container, Typography } from '@mui/material'
import CampaignCarousal from 'components/CampaignsCarousal'
import Layout from 'layout/Layout'
import IdeaBody from '../../components/IdeaBody'

const IndividualIdeaPage = () => {

  return (
    <Layout>
      <IdeaBody />
      <CampaignCarousal heading="Related Campaigns" />
    </Layout>
  )
}

export default IndividualIdeaPage
