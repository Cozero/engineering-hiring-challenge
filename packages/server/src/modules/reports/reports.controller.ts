import { Controller, Get, Param, Query } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { Metric } from '@cozero/lib'

@Controller('reports')
export class ReportsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('metrics')
  async getMetrics(@Query('company') companyName: string): Promise<Metric[]> {
    return this.prismaService.metric.findMany({
      where: { organizationName: companyName },
      take: 1000,
      orderBy: { reportedAt: 'desc' },
    })
  }
}
