import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationService } from './recommendations.service';

describe('RecommendationsService', () => {
  let service: RecommendationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommendationService],
    }).compile();

    service = module.get<RecommendationService>(RecommendationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
